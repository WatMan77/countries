import "./styles/headline.css"
import Typography from "@mui/material/Typography"

const Headline = () => {
    return (
        <Typography variant="h5" className="app-info">
            Choose a country from the dropdown on the left. Then in the middle of the screen
            there will be shown the flag, capital, population and currencies of that country.
        </Typography>
    )
}

export default Headline