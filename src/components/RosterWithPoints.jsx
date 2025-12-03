import players from "../resources/players.json"

export default function RosterWithPoints(props) {
    return <div>
        <ul>
            {props.players.map((player, index) => {
                return <li key={index}>{players[player].full_name}: {props.points[player]}</li>
            })}
        </ul>
    </div>
}