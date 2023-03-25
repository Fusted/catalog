import Link from 'next/link';
import {Button} from '../ui/Button';
import {MainContainer} from '../components/MainContainer/MainContainer';

function HomePage() {
    return (
        <MainContainer>
            <Button href="/catalog" variant="success" text="Catalog link" />
        </MainContainer>
    );
}

export default HomePage;
