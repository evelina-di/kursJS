class Parfume {
    constructor(
        title,
        author,
        type,
        bottleVolume,
        open,
    ) {
        this.title = title,
        this.author = author,
        this.type = type,
        this.bottleVolume = bottleVolume,
        this.open = open
    }
startParfume = function(parfumeStatus) {
    this.open = parfumeStatus;
}
};

export default Parfume;