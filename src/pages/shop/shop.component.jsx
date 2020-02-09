import React from 'react';
import { Route } from 'react-router-dom';

import CollectinoOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
    console.log(match);
    return (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectinoOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)};

export default ShopPage;