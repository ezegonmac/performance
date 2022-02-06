import { isEqual } from 'lodash'
import { memo } from 'react'

const MLi = memo(({ children }) => {
  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual)

// const MyList = ({ data }) => {
//   console.log('renderizando lista')
//   return (
//     <ul>
//       {data.map(x =>
//         <MLi
//           key={x.name + x.lastname}
//           fullname={`${x.name} ${x.lastname}`}
//         />
//       )}
//     </ul>
//   )
// }

const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <MLi key={x.name + x.lastname}>
            {x.name} {x.lastname}
        </MLi>
      )}
    </ul>
  )
}

export default MyList
