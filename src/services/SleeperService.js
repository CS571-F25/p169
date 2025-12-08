export function getLeagueMembers(leagueId) {
    return fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`)
        .then(response => response.json());
}

export function getLeagueRosters(leagueId) {
    return fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`)
        .then(response => response.json());
}

export function getMatchupsByWeek(leagueId, week) {
    return fetch(`https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`)
        .then(response => response.json());
}

export function getTrendingPlayers(type, lookback, limit) {
    return fetch(`https://api.sleeper.app/v1/players/nfl/trending/${type}?lookback_hours=${lookback}&limit=${limit}`)
        .then(response => response.json());
}

export function getAvatar(avatarId) {
    return fetch(`https://sleepercdn.com/avatars/${avatarId}`)
        .then(response => response.url);
}

export function getLeagues(userId) {
    return fetch(`https://api.sleeper.app/v1/user/${userId}/leagues/nfl/2025`)
        .then(response => response.json());
}