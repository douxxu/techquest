<?php

/*
Script by github.com/douxxu
api/leaderboard.php
api usage: api/leaderboard.php?username=<string>&points=<int>
*/
require 'utils/secrets.php';

$response = ["ok" => 0];

$username = $_GET['username'] ?? null;
$points = $_GET['points'] ?? null;

if (is_null($username) || is_null($points)) {
    $response["error"] = "'username' and 'points' are required";
    echo json_encode($response);
    exit;
}

if (!is_numeric($points) || intval($points) != $points) {
    $response["error"] = "'points' must be int";
    echo json_encode($response);
    exit;
}


$mysqli = new mysqli(DB_SERVER, DB_USERNAME, DB_PWD, DB_NAME, DB_PORT);

if ($mysqli->connect_error) {
    $response["error"] = "Bdd failed (we all say rip in unison)...";
    echo json_encode($response);
    exit;
}

$tableQuery = "CREATE TABLE IF NOT EXISTS leaderboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    points INT NOT NULL
)";
$mysqli->query($tableQuery);

$insertQuery = $mysqli->prepare("INSERT INTO leaderboard (username, points) VALUES (?, ?) 
    ON DUPLICATE KEY UPDATE points = ?");
$insertQuery->bind_param('sii', $username, $points, $points);
$insertQuery->execute();

$result = $mysqli->query("SELECT username, points FROM leaderboard ORDER BY points DESC LIMIT 5");
$topPlayers = $result->fetch_all(MYSQLI_ASSOC);

$rankQuery = $mysqli->prepare("SELECT COUNT(*) + 1 AS rank FROM leaderboard WHERE points > ?");
$rankQuery->bind_param('i', $points);
$rankQuery->execute();
$rankResult = $rankQuery->get_result();
$rank = $rankResult->fetch_assoc()['rank'];

$response["ok"] = 1;
$response["top_players"] = $topPlayers;
$response["current_player"] = [
    "username" => $username,
    "points" => $points,
    "rank" => $rank
];

echo json_encode($response);

$mysqli->close();
?>
