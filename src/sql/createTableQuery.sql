CREATE TABLE IF NOT EXISTS teams(
    team_id INT   AUTO_INCREMENT ,
    team_name VARCHAR(40),
    PRIMARY KEY(team_id)
);
-- Player:(id, name, age, captain, dob);

CREATE TABLE IF NOT EXISTS player(
    player_id INT PRIMARY KEY,
    player_name VARCHAR(30),
    player_age INT,
    player_captain VARCHAR(30),
    player_dob DATE
);
