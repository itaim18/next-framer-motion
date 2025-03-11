interface DemoVideoProps {
    source: string;
}

const DemoVideo = ({ source }: DemoVideoProps) => {
    return (
        <video width="600" controls>
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default DemoVideo;
