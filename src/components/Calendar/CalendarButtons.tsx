import { BiRegularChevronLeftSquare, BiRegularChevronRightSquare } from "solid-icons/bi"
import { Match, Switch } from "solid-js"

type Direction = "right" | 'left'

interface Props {
    iconDirection: Direction
}


export const CalendarButtons = (props: Props) => {
    return (
        <Switch>
            <Match when={props.iconDirection === 'left'}><BiRegularChevronLeftSquare color='#14141f' size={20}/></Match>
            <Match when={props.iconDirection === 'right'} ><BiRegularChevronRightSquare color='#14141f' size={20}/></Match>
        </Switch>
    )
}