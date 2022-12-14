import { Container } from "@chakra-ui/react";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import WorkList from "../components/WorkList";

export default function Home() {
    return (
        <Container maxW="7xl">
            <Auth />
            <TodoList />
            <WorkList/>
        </Container>
    );
}
