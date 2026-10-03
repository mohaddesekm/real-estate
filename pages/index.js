import Features from '@/components/template/Index/Feature';
import Gallery from '@/components/template/Index/Gallery';
import Homes from '@/components/template/Index/Homes';
import Story from '@/components/template/Index/StoryPictures';

export default function Home() {
    return (
        <>
            <Features />
            <Story />
            <Homes />
            <Gallery />
        </>
    );
}
