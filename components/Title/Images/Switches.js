import styles from '../Title.module.scss'

export default function Switches(props) {
   return (
      <div className={styles.Switches}>
         {props.switches.map(item => {
            return (
               <button
                  key={item.index}
                  className={props.index === item.index ? styles.Active : ''}
                  onClick={() => props.handleSwitch(item.index)}>
                  {item.name}
               </button>
            )
         })}
      </div>
   )
}
