import React from 'react';

const Aboutstats = props => {
    if (props.data.length === 0) {
        return <div />;
    }
    return props.data.map((s, index) => {
        return (
            <div key={index}>
                <h5>The Track Records of The Service</h5>
                Audiofile tests / match found / no match <br />
                {s.filecount} / {s.fileresultok} / {s.fileresultnok}
                <br />
                Hum recordings / match found / no match <br />
                {s.humcount} / {s.humresultok} / {s.humresultnok}
                <br />
                Lyrics sent / match found / no match <br />
                {s.lyricscount} / {s.lyricsresultok} / {s.lyricsresultnok}
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
