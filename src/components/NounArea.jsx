import Noun from './Noun';

const NounArea = ( { nouns, setNouns } ) => {
    return ( 
        <div className="noun-area">
            <h2>German nouns</h2>
            <p>There are {nouns.length} nouns.</p>
            {
                nouns.map((noun, i) => (
                    <Noun 
                        key={i}
                        noun={noun}
                        nouns={nouns}
                        setNouns={setNouns}
                    />
                ))
            }
      </div>
     );
}
 
export default NounArea;