<template>
    <div class="Image">
        我是Image组件
        <img :src="mySrc" alt="">
        <button @click="toImg()">下载图片</button>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            mySrc:'',
            id:100
        };
    },
    computed: {

    },
    created() {
        this.mySrc=this.$route.query.url
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        toImg(){
            // function dataURLtoBlob(dataurl) {
            //     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            //         bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            //     while (n--) {
            //         u8arr[n] = bstr.charCodeAt(n);
            //     }
            //     return new Blob([u8arr], { type: mime });
            // }
            
            function downloadFile(url,name='image'){
                var a = document.createElement("a")
                a.setAttribute("href",url)
                a.setAttribute("download",name)
                a.setAttribute("target","_blank")
                // let clickEvent = document.createEvent("MouseEvents");
                // clickEvent.initEvent("click", true, true);  
                // a.dispatchEvent(clickEvent);
                a.click()
            }
            
            // function downloadFileByBase64(base64,name){
            //     var myBlob = dataURLtoBlob(base64)
            //     var myUrl = URL.createObjectURL(myBlob)
            //     downloadFile(myUrl,name)
            // }
            // let m=downloadFileByBase64(this.mySrc,'pei')
            downloadFile(this.mySrc,'饼图')
            // console.log(m);
        }
               

    },
    components: {

    },
};
</script>

<style scoped >

</style>
