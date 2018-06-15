<template>
  <div>
  <!--<video ref="video" :width="this.width" :height="this.height" :src="this.source" :autoplay="this.autoplay"></video>-->
  <video ref="video"  :autoplay="true" style="width:100%; height:100%"></video>

</div>

</template>

<script>
export default {
  name: 'webcam',
    data () {
        return {
            stream: '',
            source: '',
            video: null,
            canvas: null
        };
    },
    props: {
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 300
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        screenshotFormat: {
          type: String,
          default: 'image/jpeg'
        },
        facingMode: {
          type: String,
          default: 'user'
        }
    },
    /*
    mounted() {
      document.getElementById('out').innerHTML = 'mounted';

        if (!this.hasMedia()) {
            this.$emit('notsupported');
            document.getElementById('out').innerHTML = 'notsupported';

            return;
        }
        document.getElementById('out').innerHTML = 'requesting media';

        this.requestMedia();

        document.getElementById('out').innerHTML = 'media play';


        if (navigator.getUserMedia) {
            navigator.getUserMedia({ video: true }, stream => {
              document.getElementById('out').innerHTML = 'started';

            this.source = window.URL.createObjectURL(stream);
            document.getElementById('out').innerHTML = 'started 2';

            this.stream = stream;
            document.getElementById('out').innerHTML = 'started 3';

            this.$emit('started', stream);
            document.getElementById('out').innerHTML = 'started 4';


        }, error => {
            this.$emit('error', error);
            document.getElementById('out').innerHTML = 'error';

          });
        }
    },*/
    mounted() {
    this.video = this.$refs.video;

    var constraints = {


          audio: false, video: {facingMode: this.facingMode}

    }



    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
          //document.getElementById('out').innerHTML = 'mounting';

            //this.video.src = window.URL.createObjectURL(stream);
            this.video.srcObject = stream;
//window.stream = stream;
            //document.getElementById('out').innerHTML = 'mounted';

            //this.video.play();
            //document.getElementById('out').innerHTML = 'recording';



        });
    } else {
      document.getElementById('out').innerHTML = 'error';

    }


},
    methods: {
        hasMedia() {
            return !!this.getMedia();
        },
        getMedia() {
            return (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia);
        },
        requestMedia() {
            navigator.getUserMedia = this.getMedia();
        },
        capture() {
            if (!this.hasMedia()) {
                this.$emit('notsupported');
                return null;
            }
            return this.getCanvas().toDataURL(this.screenshotFormat);
        },
        getCanvas() {
            let video = this.$refs.video;
            if (!this.ctx) {
                let canvas = document.createElement('canvas');
                canvas.height = video.clientHeight;
                canvas.width = video.clientWidth;
                this.canvas = canvas;

                this.ctx = canvas.getContext('2d');
            }

            const { ctx, canvas } = this;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            return canvas;
        }
    }
}
</script>
