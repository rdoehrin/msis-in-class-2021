<?php
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
  $sql = 'SELECT * FROM game';
  $vars = [];

if (isset($_GET['referee'])) {
  // This is an example of a parameterized query
  // $sql = 'SELECT * FROM game 
  // WHERE id = ?';
  
  $sql = 'SELECT game.field, game.start_time from game, child, referee
  where child.gid = game.id AND child.rid = referee.id AND referee.id=?';

  $vars = [ $_GET['referee'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$game = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($game, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;