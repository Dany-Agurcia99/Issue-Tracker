import { Box, Card, Flex } from "@radix-ui/themes"
import { Skeleton } from "@/app/components"

const loading = () => {
  return (
    <Box className="max-w-3xl">
      <Skeleton height={40} width={500} />
      <Flex gap="2" align="center" mb="2">
        <Skeleton width={50} />
        <Skeleton width={200} />
      </Flex>
      <Card className="prose" mt="6">
        <Skeleton count={3} />
      </Card>
    </Box>
  )
}

export default loading
