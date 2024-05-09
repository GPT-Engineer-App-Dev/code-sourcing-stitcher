import { Box, Container, Flex, Heading, Text, VStack, Link, IconButton, Image } from "@chakra-ui/react";
import { FaCode, FaTools, FaCheckCircle, FaLink } from "react-icons/fa";
import CodeSourcingImg from '../../public/images/code-sourcing.png';
import ModificationImg from '../../public/images/modification.png';
import CompatibilityChecksImg from '../../public/images/compatibility-checks.png';
import IntegrationImg from '../../public/images/integration.png';

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" py={4}>
        <Flex justifyContent="space-between" alignItems="center" px={8}>
          <Heading as="h1" size="lg" color="white">Stitchers</Heading>
          <Flex as="nav">
            <Link href="#code-sourcing" p={2} color="white">Code Sourcing</Link>
            <Link href="#modification" p={2} color="white">Modification</Link>
            <Link href="#compatibility-checks" p={2} color="white">Compatibility Checks</Link>
            <Link href="#integration" p={2} color="white">Integration</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={10} py={10} align="stretch">
        <Box id="code-sourcing" p={5} shadow="md" borderWidth="1px">
          <Flex direction="column" align="center">
            <Image src={CodeSourcingImg} alt="Code Sourcing" boxSize="200px" objectFit="cover" m={4} />
            <IconButton aria-label="Code Sourcing" icon={<FaCode />} size="lg" />
            <Heading mt={4} mb={2}>Code Sourcing</Heading>
            <Text textAlign="center">Efficiently source code from a variety of repositories and manage your codebase with ease.</Text>
          </Flex>
        </Box>
        <Box id="modification" p={5} shadow="md" borderWidth="1px">
          <Flex direction="column" align="center">
            <Image src={ModificationImg} alt="Modification" boxSize="200px" objectFit="cover" m={4} />
            <IconButton aria-label="Modification" icon={<FaTools />} size="lg" />
            <Heading mt={4} mb={2}>Modification</Heading>
            <Text textAlign="center">Modify existing code to meet new requirements or improve functionality.</Text>
          </Flex>
        </Box>
        <Box id="compatibility-checks" p={5} shadow="md" borderWidth="1px">
          <Flex direction="column" align="center">
            <Image src={CompatibilityChecksImg} alt="Compatibility Checks" boxSize="200px" objectFit="cover" m={4} />
            <IconButton aria-label="Compatibility Checks" icon={<FaCheckCircle />} size="lg" />
            <Heading mt={4} mb={2}>Compatibility Checks</Heading>
            <Text textAlign="center">Ensure your code is compatible across different platforms and environments.</Text>
          </Flex>
        </Box>
        <Box id="integration" p={5} shadow="md" borderWidth="1px">
          <Flex direction="column" align="center">
            <Image src={IntegrationImg} alt="Integration" boxSize="200px" objectFit="cover" m={4} />
            <IconButton aria-label="Integration" icon={<FaLink />} size="lg" />
            <Heading mt={4} mb={2}>Integration</Heading>
            <Text textAlign="center">Seamlessly integrate various software components into a cohesive system.</Text>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;