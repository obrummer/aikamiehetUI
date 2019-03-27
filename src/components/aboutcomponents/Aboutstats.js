import React from 'react';
import { Badge } from 'react-bootstrap';

const Aboutstats = props => {
    if (props.data.length === 0) {
        return <div />;
    }
    return props.data.map((s, index) => {
        return (
            <div key={index}>
                <h5>The Track Records of The Service</h5>
                <span className="stats">Audiofile tests / match found / no match</span>
                <br />
                <Badge pill variant="warning">
                    {s.filecount}
                </Badge>{' '}
                /{' '}
                <Badge pill variant="secondary">
                    {s.fileresultok}
                </Badge>{' '}
                /{' '}
                <Badge pill variant="success">
                    {s.fileresultnok}
                </Badge>
                <br />
                <span className="stats">Hum recordings / match found / no match</span>
                <br />
                <Badge pill variant="warning">
                    {s.humcount}
                </Badge>{' '}
                /{' '}
                <Badge pill variant="secondary">
                    {s.humresultok}
                </Badge>{' '}
                /{' '}
                <Badge pill variant="success">
                    {s.humresultnok}
                </Badge>
                <br />
                <span className="stats">Lyrics sent / match found / no match</span>
                <br />
                <Badge pill variant="warning">
                    {s.lyricscount}
                </Badge>{' '}
                /{' '}
                <Badge pill variant="secondary">
                    {s.lyricsresultok}
                </Badge>{' '}
                /{' '}
                <Badge pill variant="success">
                    {s.lyricsresultnok}
                </Badge>
            </div>
        );
    });
};

// class Aboutstats extends Component {

//     render() {

//         if (this.props.data.length == 0) {
//             return <div />
//         } else {
//             const stats = this.props.data.map((s, index) => {
//                 return (<div>
//                     <p>The Track Records of The Service</p>
//                     Audiofile tests / match found / no match < br />
//                     {s.filecount} / {s.fileresultok} / {s.fileresultnok}
//                     < br />
//                     Hum recordings / match found / no match < br />
//                     {s.humcount} / {s.humresultok} / {s.humresultnok}
//                     < br />
//                     Lyrics sent / match found / no match < br />
//                     {s.lyricscount} / {s.lyricsresultok} / {s.lyricsresultnok}
//                 </div>)
//             })
//         }

//         return (
//             <div>
//                 { stats }
//             </div >
//         );
//     }
// }

export default Aboutstats;
