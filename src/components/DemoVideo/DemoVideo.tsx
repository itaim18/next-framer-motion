const DemoVideo = () => {
    return (
        <video width="600" controls>
            <source src="/assets/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default DemoVideo;
