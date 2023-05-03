import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import "./styles/card.css"

const CountryInfoDetails = ({ countryInfo }) => {
    if (!countryInfo) {
        return null
    }

    const currencies = Object.values(countryInfo.currencies).map(cur => cur.name).join(", ")

    return (
        <Card sx={{ minWidth: 400 }} className="card" >
            <CardMedia
                image={countryInfo.flags.png}
                component="img"
            />
            <CardContent>
                <Typography gutterBottom variant="h4">
                    {countryInfo.name.common}
                </Typography>
                <Typography>
                    Capital: {countryInfo.capital}
                </Typography>
                <Typography>
                    Population: {countryInfo.population}
                </Typography>
                <Typography>
                    Currencies: {currencies}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CountryInfoDetails