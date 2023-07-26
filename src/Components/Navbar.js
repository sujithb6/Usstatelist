import React, { Component } from 'react';
import Filters from '../Components/Filters'
import Tables from '../Components/Tables'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { SearchContextProvider } from '../Context/Context'
import '../App.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Home'
    };
  }

  handleTabChange(tab) {
    this.setState({ activeTab: tab });
  }

  renderTabContent() {
    switch(this.state.activeTab) {
      case 'Home':
        return <div className="nav-content"><SearchContextProvider>
        <Box>
          <Grid container direction="column" columns={{ xs: 2 }}>
              <Filters/>
              <Tables />
          </Grid>
        </Box>
      </SearchContextProvider></div>;
      case 'About':
        return <div className="nav-content"><img className='svg' src='https://raw.githubusercontent.com/sujithb6/images/b46bbcb747f6c67c95dd4ac266e9625ec9f7edba/us-state-wise-population.svg' alt=''/></div>;
      case 'Contact':
        return <div className="nav-content">This is Contact</div>;
      default:
        return <div className="nav-content">Select a tab</div>;
    }
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li onClick={() => this.handleTabChange('Home')}>Home</li>
            <li onClick={() => this.handleTabChange('About')}>About</li>
            <li onClick={() => this.handleTabChange('Contact')}>Contact</li>
          </ul>
        </nav>
        {this.renderTabContent()}
      </div>
    );
  }
}

export default Navbar;
