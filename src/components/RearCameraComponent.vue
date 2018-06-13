<script>
import Webcam from 'vue-web-cam/src/webcam';

export default {
    extends: Webcam,
    name: 'RearCameraComponent',
    mounted: function() {
        if (!this.hasMedia()) {
            this.$emit('notsupported');
            return;
        }
        this.requestMedia();


        console.log("1) media requested!!!!!!!!!!")


        if (navigator.getUserMedia) {
            console.log("2) media requested!!!!!!!!!!")

            navigator.getUserMedia({
                video: true
            }, stream => {
                console.log("3) media requested!!!!!!!!!!")

                this.srcObject = stream;

                //this.source = window.URL.createObjectURL(stream);
                this.stream = stream;

                this.$emit('started', stream);
            }, error => {
                this.$emit('error', error);
                console.log("4) ADSFNADSFASDFAS  media requested!!!!!!!!!!")

            });
        }
    }

}
</script>
