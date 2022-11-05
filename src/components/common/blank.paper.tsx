import { Paper, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ChildrenType } from '../../types'

interface BlankPaperIfc extends ChildrenType {
    height?: string;
    backgroundClr?: string
    width?: string;
    margin?: string
}

function BlankPaper(props: BlankPaperIfc) {
    const { children } = props
    const classes = useStyles({ ...props })
  return (
    <Paper className={classes.infoCard}>
        {children}
    </Paper>
  )
}

const useStyles = makeStyles<Theme, BlankPaperIfc>((theme: Theme) =>({
    infoCard: {
        height:({ height }) => height ?? `10vh`,
        width:({ width }) => width,
        backgroundColor:({ backgroundClr }) => backgroundClr ?? `rgba(39, 42, 44, 0.76)`,
        // opacity: 0.5,
        padding: "2vh 1.5vw 2vh 1.5vw",
        margin:({ margin }) => margin ?? `1vh 0px 0.5vh 0px`,
      },
}))

export default BlankPaper