import React from 'react';

const googleDriveUrl = 'https://drive.google.com/embeddedfolderview?id=';

class GoogleDrive extends React.Component {
    render() {
        const {folderId} = this.props;

        return (
            <iframe src={googleDriveUrl + folderId + "#grid"}/>
        )
    };
}

export default GoogleDrive;