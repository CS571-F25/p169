import { getMatchupsByWeek, getLeagueRosters, getLeagueMembers } from "../services/SleeperService";
import { useState, useEffect } from "react";
import MatchupCard from "../components/MatchupCard";
import MatchupSearch from "../components/MatchupSearch";

export default function Matchups(props) {

    const [leagueId, setLeagueId] = useState(sessionStorage.getItem('leagueId'));
    const [data, setData] = useState([]);
    const [matchups, setMatchups] = useState([]);
    const [week, setWeek] = useState(1);
    const [rosters, setRosters] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        getLeagueRosters(leagueId).then(e => setRosters(e));
        getLeagueMembers(leagueId).then(e => setMembers(e));
    }, [])

    const handleSubmit = () => {
        setMatchups([])
        getMatchupsByWeek(leagueId, week).then( matches => {
            setData(matches);
        })
    };

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
            <MatchupSearch week={week} setWeek={setWeek} handleSubmit={handleSubmit}/>
            {matchups ? 
                matchups.map((match, index) => <MatchupCard key={index} members={members} rosters={rosters} player1={match[0]} player2={match[1]}/>)
            :
                ''
            }
        </div>
    );
}