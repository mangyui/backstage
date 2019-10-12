<template>
  <div class="clearfix">
    <a-upload
      action="http://47.107.80.19:1258/?service=App.Upload.Upload"
      listType="picture-card"
      :fileList="fileList"
      @preview="handlePreview"
      @change="handleChange"
      :beforeUpload="beforeUpload"
    >
      <div v-if="fileList.length < 1">
        <a-icon type="plus" />
        <div class="ant-upload-text">本地上传</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
export default {
  props: {
    avatar: String || ''
  },
  data () {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: []
    }
  },
  methods: {
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      if (fileList[0] && fileList[0].status) {
        this.fileList = fileList
        console.log(fileList[0])
      } else {
        this.fileList = []
      }
    },
    beforeUpload (file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        this.$message.error('图片格式不正确!')
        return false
      }
      const isLt2M = file.size / 1024 / 1024 < 5
      if (!isLt2M) {
        this.$message.error('图片不能超过5MB!')
        return false
      }
      return true
    },
    created () {
      if (this.avatar && this.avatar !== '') {
        this.fileList = [{
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: this.avatar
        }]
      }
    }
  }
}
</script>
<style>
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
