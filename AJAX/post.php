<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? "Unknown";
    $subs = $_POST['subs'] ?? "not specified";

    echo "This is " . htmlspecialchars($name) . ". Please " . htmlspecialchars($subs) . " my channel.";
}
?>
