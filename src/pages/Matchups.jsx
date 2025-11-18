import { getMatchupsByWeek } from "../services/SleeperService";
import { useState, useEffect } from "react";
import MatchupCard from "../components/MatchupCard";

export default function Matchups(props) {

    const [leagueId, setLeagueId] = useState(sessionStorage.getItem('leagueId') || '');
    const [data, setData] = useState([]);
    const [matchups, setMatchups] = useState([]);

    useEffect(() => {
        getMatchupsByWeek(leagueId, 11).then( data => {
            setData(data);
            console.log(data);
        })
    }, [])

    useEffect( () => {
        let seen = [];
        data?.map((team) => {
            seen.push(team.roster_id)
            let opponent = data
                .filter((f) => !seen.includes(f.roster_id))
                .find((e) => team.matchup_id === e.matchup_id)

            if (opponent) {
                setMatchups(prev => [...prev, [team, opponent]])
            }
        })
    }, [data]);

    return(
        <div>
            {matchups ? 
                matchups.map((match, index) => <MatchupCard key={index} player1={match[0]} player2={match[1]}/>)
            :
                ''
            }
        </div>
    );
}