import  { useState } from 'react';
import { TitleDiv, SelectDiv } from './Styles';
import { Grid } from '@material-ui/core';
import LeftView from './components/leftView';
import RightView from './components/rightView';

function App() {
  const [category,setCategory] = useState<string>('');
  const [product,setProduct] = useState<string>('');

  return (
    <div className="App">
      <TitleDiv>My Fabulous Store</TitleDiv>
      <Grid container spacing={8}>
        <Grid item xs={6} sm={3}>
          <SelectDiv>
            <form autoComplete="off">
              <LeftView onCategoryChange={setCategory} onProductChange={setProduct}/>
            </form>
          </SelectDiv>
        </Grid>
        <Grid item xs={12} sm={9}>
          <RightView category={category} product={product}></RightView>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
