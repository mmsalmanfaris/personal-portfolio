<?php
// Simple proxy to forward chat requests to Groq API and hide the API key from clients.
// Place this file in `public/api/chat.php` on cPanel. Make sure this file is NOT committed with the key.

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // CORS preflight
    http_response_code(200);
    exit(0);
}

// Read request body
$body = file_get_contents('php://input');
$data = json_decode($body, true);

// Load the GROQ API key from environment variable or from a file above webroot
$apiKey = getenv('GROQ_API_KEY');
if (!$apiKey) {
    // try several common locations for a key file (outside or inside webroot)
    $candidates = [
        __DIR__ . '/../groq_key.txt',    // public/groq_key.txt
        __DIR__ . '/../../groq_key.txt', // one level above public (if deployed differently)
        (isset($_SERVER['HOME']) ? rtrim($_SERVER['HOME'], '/') . '/groq_key.txt' : null),
    ];
    foreach ($candidates as $keyFile) {
        if (!$keyFile) continue;
        if (file_exists($keyFile)) {
            $apiKey = trim(file_get_contents($keyFile));
            break;
        }
    }
}

if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['error' => 'Server misconfigured: GROQ API key not found']);
    exit(1);
}

// Basic validation
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Bad request: no JSON body']);
    exit(1);
}

$url = 'https://api.groq.com/openai/v1/chat/completions';

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr = curl_error($ch);
curl_close($ch);

if ($response === false) {
    http_response_code(502);
    echo json_encode(['error' => 'Upstream request failed', 'details' => $curlErr]);
    exit(1);
}

http_response_code($httpCode);
echo $response;

?>
