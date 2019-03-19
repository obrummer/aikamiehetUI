import React, { Component } from 'react';
import AppPicture from '../components/picturecomponents/AppPicture';
import AppCardHum from '../components/humcomponents/AppCardHum';
import AppCardText from '../components/textcomponents/AppCardText';
import AppCardFile from '../components/filecomponents/AppCardFile';

export default class HomeView extends Component {
    render() {
        return (
            <div>
                <AppPicture />
                <AppCardFile />
                <AppCardHum />
                <AppCardText />
            </div>
        );
    }
}
