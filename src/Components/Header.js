import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    header: {
        background: 'linear-gradient(45deg, #2D2D2D 30%, #5A5A5A 90%)',
        border: 0,
    },
    title: {
        fontWeight: 'bold',

    }
})

export default function Header() {
    const classes = useStyles()

    return (
        <div>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>Dad Jokeline</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}