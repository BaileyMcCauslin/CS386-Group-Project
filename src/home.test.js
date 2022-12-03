

const home = require('./home')

test('react logout button', () => {
    expect(home.Home()).toBe("<div className = \"page\"> <div className = \"main-home-card\"> <button className=\'logoutBtn\' onClick={ signOutUser }>Logout</button> <h1 className = \"titleAlignHome\"> Welcome Home!<br></br> Here are some freshly baked jokes </h1> <ul> { card.map(( item, index ) => { return( <iframe className='gif' src={ item }></iframe> )})} </ul> </div> </div>");
});
