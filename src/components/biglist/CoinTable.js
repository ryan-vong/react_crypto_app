import React from 'react';
import './Table.css';
import { calcChangePercent } from '../../helper';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const CoinTable = (props) => {
    const { crypto, history } = props;

    return (
        /* The UI content from BigList will be copied here */
        <div className="tb-container">

        <table className="tb">
           <thead className="tb-head">
                  <tr>
                      <th>CRYPTO NAME</th>
                      <th>PRICE</th>
                      <th>MARKET CAP</th>
                      <th>24 HOUR CHG</th>
                  </tr>
           </thead>
           <tbody className="tb-body">
               {crypto.map((currency) => (
               <tr key={currency.id} onClick={() => history.push(`/currency/${currency.id}`)}>
                  <td><span className="tb-rank">{currency.rank}</span> {currency.name}</td>
                  <td><span className="tb-dollar">$ </span>{currency.price}</td>
                  <td><span className="tb-dollar">$ </span>{currency.marketCap}</td>
                  <td>{calcChangePercent(currency.percentChange24h)}</td>
               </tr>
               ))}
           </tbody>
        </table>
    </div>
    );
}

CoinTable.propTypes = {
    crypto: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(CoinTable);
