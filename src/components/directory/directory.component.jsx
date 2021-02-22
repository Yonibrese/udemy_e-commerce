import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styes.scss'

const Directory = ({sections})=> (
  <div className="menu-list ">
    {
      sections.map(({id, ...otherSectionProps})=>(
          <MenuItem  key={id}  {...otherSectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});


export default connect(mapStateToProps)(Directory);