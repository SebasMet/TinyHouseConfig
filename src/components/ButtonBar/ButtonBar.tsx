
import { Button, ButtonGroup } from '@mui/material'
import './ButtonBar.css'

function ButtonBar() {


    return (
        <>
        <div id="button-group-container">
            <ButtonGroup variant="contained" aria-label="outlined primary button group" >
                <Button>General</Button>
                <Button>Bathroom</Button>
                <Button>Kitchen</Button>
                <Button>Extra's</Button>
            </ButtonGroup>
            </div>


        </>
    )
}

export default ButtonBar
