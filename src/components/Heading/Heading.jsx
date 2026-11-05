import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Button from '../Button'

function Heading() {
  const [heading, setHeading] = useState('Pokemon Project')

  return (
    <Card as="header" bg="dark" text="white" body>
      <Stack direction="horizontal" className="justify-content-between">
        <h1 className="mb-0">{heading}</h1>
        <Button onClick={() => setHeading('Pokemon Project: Day 2')}>Change Title</Button>
      </Stack>
    </Card>
  )
}

export default Heading