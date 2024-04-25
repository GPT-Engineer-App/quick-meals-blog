import { Box, Heading, Text, SimpleGrid, Image, Container, VStack, Link, Button } from "@chakra-ui/react";
import { FaUtensils, FaHeart, FaSeedling, FaBookOpen } from "react-icons/fa";

const categories = [
  {
    icon: FaUtensils,
    title: "Quick Meals",
    description: "Delicious meals in 30 minutes or less.",
  },
  {
    icon: FaHeart,
    title: "Healthy Choices",
    description: "Nutritious and tasty options for every meal.",
  },
  {
    icon: FaSeedling,
    title: "Vegetarian",
    description: "Creative and fulfilling vegetarian recipes.",
  },
  {
    icon: FaBookOpen,
    title: "Cooking Tips",
    description: "Improve your skills with these tips and tricks.",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Quick & Healthy Cooking
          </Heading>
          <Text fontSize="xl">Explore our blog for the best quick and healthy recipes, tips, and more!</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {categories.map((category, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" rounded="md">
              <VStack>
                <category.icon size="3em" />
                <Heading as="h3" size="lg">
                  {category.title}
                </Heading>
                <Text>{category.description}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
        <Box>
          <Text fontSize="lg" my={5}>
            Subscribe to our newsletter for the latest recipes and kitchen tips!
          </Text>
          <Button colorScheme="teal" size="lg">
            Subscribe
          </Button>
        </Box>
        <Box as="footer" textAlign="center" py={10}>
          <Text>© {new Date().getFullYear()} Quick & Healthy Cooking. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
