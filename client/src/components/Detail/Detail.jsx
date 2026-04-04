import React from 'react'
import { useParams } from "react-router"

function DetailComponent() {
  const params = useParams()
  const url = 'http://localhost:5173/file1.pdf'
  return (
    <div>
      <h1>Detail {params.id}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dignissimos earum consequatur ducimus at, autem aliquam eos tenetur obcaecati exercitationem numquam ipsam harum perferendis est commodi nostrum et, cumque labore.
        Quam possimus consequatur error odio aspernatur! Ratione quam maxime officia doloremque sit ad quas voluptatum? Rerum repellendus ratione totam, laborum, reiciendis, ipsam laudantium eos qui fugit reprehenderit aperiam. Beatae, nobis?
        Deleniti consectetur rerum reiciendis nihil velit voluptate repellendus, modi sunt quod ad ipsa quidem provident reprehenderit quisquam aspernatur! Id optio quas natus. Accusamus nesciunt ab sapiente quibusdam aspernatur facilis assumenda!
        Incidunt dolorum cum pariatur enim repellendus, ullam error eos dolore earum. Amet, omnis harum. Laborum dolores ipsam error in? Dolorem optio nostrum eius at impedit commodi suscipit quod quibusdam ea.
        Porro voluptates numquam iure, ab odit aspernatur soluta, excepturi dolorum a beatae veniam quas sed laudantium vitae assumenda voluptatibus debitis quos provident. Consectetur architecto numquam quas porro quasi maiores delectus!</p>
      <embed src={url} type="application/pdf" width="100%" height="600px" />
    </div>

  )
}

export default DetailComponent