import React from 'react';
import { RootURL } from '../../config';
import Load from '../common/Load';
import { handleResponse, calcChangePercent } from '../../helper';
import './DetailCurrency.css';

class DetailCurrency extends React.Component {
    constructor() {
        super();

        this.state = {
            currency: {},
            loading: false,
            error: null,
        };
    }

    componentDidMount() {
        const currencyID = this.props.match.params.id;

        this.setState({ loading: true });

        fetch(`${RootURL}/cryptocurrencies/${currencyID}`)
           .then(handleResponse)
           .then((currency) => {
               this.setState({
                   loading: false,
                   error: null,
                   currency: currency,
               });
           })
           .catch((error) => {
               this.setState({
                   loading: false,
                   error: error.errorMessage,
               });
           });
    }

    render() {
        const { loading, error, currency } = this.state;

        if (loading) {
            return <div className="loading-container"><Load /></div>
        }

        if (error) {
            return <div className="error">{error}</div>
        }

        return (
            <div className="dt">
               <h1 className="dt-heading">{currency.name} ({currency.symbol})</h1>

               <div className="dt-container">
                  <div className="dt-item">
                     Price: <span className="dt-value">$ {currency.price}</span>
                  </div>
                  <div className="dt-item">
                     Rank: <span className="dt-value">{currency.rank}</span>
                  </div>
                  <div className="dt-item">
                     24-Hour Change: <span className="dt-value">{calcChangePercent(currency.percentChange24h)}</span>
                  </div>
                  <div className="dt-item">
                     Market cap: <span className="dt-value">$ {currency.marketCap}</span>
                  </div>
                  <div className="dt-item">
                     24 Hour Vol: <span className="dt-value">{currency.volume24h}</span>
                  </div>
                  <div className="dt-item">
                     Total Supply: <span className="dt-value">{currency.totalSupply}</span>
                  </div>
               </div>
            </div>
        );
    }
}

export default DetailCurrency;
