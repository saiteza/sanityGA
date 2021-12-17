 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 const MenuView=({onChange,filter}) => {
const ICONS=['border-all','list'];
const DATE_FILTERING_ICONS = ['sort-numeric-down', 'sort-numeric-up'];
     return (
      <div className="filtering-menu mb-2">
         
           <FontAwesomeIcon   className="clickable hoverable mr-3" onClick={() => {onChange('view',{list: +!filter.view.list})}}
            icon={ICONS[+filter.view.list ]} size="lg" >
               </FontAwesomeIcon >
&nbsp;&nbsp;&nbsp;&nbsp;
<FontAwesomeIcon
        className="clickable hoverable"
        size="2x"
        icon={DATE_FILTERING_ICONS[filter.date.asc]}
        onClick={() =>
          onChange('date', {asc: +!filter.date.asc })} />
        </div>

    )
  }
export default MenuView;