 import 'styles/index.scss';
 import ThemeProvider from 'providers/Theamprovider';
import  'bootstrap/dist/css/bootstrap.min.css';
 import 'highlight.js/styles/docco.css' ;
 import '@fortawesome/fontawesome-svg-core/styles.css'
 import { library,config } from '@fortawesome/fontawesome-svg-core';
import { faBorderAll,faList,faSun,faMoon,faSortNumericDown,
    faSortNumericUp} from '@fortawesome/free-solid-svg-icons';
import "react-toggle/style.css"
config.autoAddCss=false;
   
library.add(  
    faSun,
    faMoon,
    faList,
    faBorderAll,
    faSortNumericDown,
    faSortNumericUp,
    faSortNumericDown,faSortNumericUp);


   
 
export  default  ({Component,pageProps})=>
<ThemeProvider>
<Component {...pageProps}/>
</ThemeProvider>;
