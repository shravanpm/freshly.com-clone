import React from 'react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import PlanTable from '../../Components/PlanTable/PlanTable'

function Plans() {
    return (
        <div margin="auto">
            <Box bg="#fffdf7" p={4} margin={'auto'} insetBlock={'0'}>
                <Box>
                    <Heading mb={3} p={4} fontSize='2em' fontWeight={500} color='#000'>
                        Flexible plans that fit your life</Heading>
                </Box >
                <Box width="52%" fontSize={"0.58em"} pr={5} pf={5}
                    fontWeight={500} margin="auto"
                    textAlign="center" >
                    <Text>We offer anywhere from 4–12 meals per week, starting at <Text as="span" color="teal">$11.79 / meal</Text>. <Text as="span" fontWeight={650}>The bigger your box, the more you’ll save</Text> — and you can always pause, cancel, or change your plan at any time.
                    </Text>
                </Box>
                <Box>
                    <PlanTable border={"    border: 1px solid #ededed"} />
                    <Heading mb={3} p={4} fontSize='0.74em'
                        fontWeight={500} color="#357471">
                        Shipping and tax added at checkout</Heading>

                    <Button bg="blue" color="white" borderRadius="0%" variant="outline" size="md">
                        Continue
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Plans

