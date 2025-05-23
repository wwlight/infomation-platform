export default defineEventHandler(() => {
  return {
    code: 200,
    msg: '操作成功',
    data: [
      {
        id: 1,
        creater: null,
        createTime: '2024-11-01T10:20:33.000+08:00',
        updater: null,
        updateTime: '2024-11-01T10:20:38.000+08:00',
        isDelete: 0,
        labelCode: '100',
        labelName: '异构计算支持',
        parentId: 0,
        children: [
          {
            id: 4,
            creater: null,
            createTime: '2024-11-01T10:27:03.000+08:00',
            updater: null,
            updateTime: '2024-11-01T10:27:16.000+08:00',
            isDelete: 0,
            labelCode: '100001',
            labelName: 'GPU',
            parentId: 1,
            children: null,
          },
          {
            id: 5,
            creater: null,
            createTime: '2024-11-01T10:27:06.000+08:00',
            updater: null,
            updateTime: '2024-11-01T10:27:19.000+08:00',
            isDelete: 0,
            labelCode: '100002',
            labelName: 'FPGA',
            parentId: 1,
            children: null,
          },
          {
            id: 6,
            creater: null,
            createTime: '2024-11-01T10:27:09.000+08:00',
            updater: null,
            updateTime: '2024-11-01T10:27:22.000+08:00',
            isDelete: 0,
            labelCode: '100003',
            labelName: 'TPU',
            parentId: 1,
            children: null,
          },
          {
            id: 7,
            creater: null,
            createTime: '2024-11-01T10:27:12.000+08:00',
            updater: null,
            updateTime: '2024-11-01T10:27:26.000+08:00',
            isDelete: 0,
            labelCode: '100004',
            labelName: 'CPU',
            parentId: 1,
            children: null,
          },
        ],
      },
      {
        id: 2,
        creater: null,
        createTime: '2024-11-01T10:21:05.000+08:00',
        updater: null,
        updateTime: '2024-11-01T10:21:09.000+08:00',
        isDelete: 0,
        labelCode: '101',
        labelName: '算力提供方/运营方',
        parentId: 0,
        children: [
          {
            id: 8,
            creater: null,
            createTime: '2024-11-01T10:27:12.000+08:00',
            updater: null,
            updateTime: '2024-11-01T10:27:12.000+08:00',
            isDelete: 0,
            labelCode: '101001',
            labelName: '华为云',
            parentId: 2,
            children: null,
          },
          {
            id: 9,
            creater: null,
            createTime: '2024-11-01T10:27:12.000+08:00',
            updater: null,
            updateTime: '2024-11-01T10:27:12.000+08:00',
            isDelete: 0,
            labelCode: '101002',
            labelName: '阿里云',
            parentId: 2,
            children: null,
          },
          {
            id: 10,
            creater: null,
            createTime: '2024-11-01T10:27:12.000+08:00',
            updater: null,
            updateTime: '2024-11-01T10:27:12.000+08:00',
            isDelete: 0,
            labelCode: '101003',
            labelName: '腾讯云',
            parentId: 2,
            children: null,
          },
        ],
      },
      {
        id: 3,
        creater: null,
        createTime: '2024-11-01T10:21:34.000+08:00',
        updater: null,
        updateTime: '2024-11-01T10:21:37.000+08:00',
        isDelete: 0,
        labelCode: '102',
        labelName: '服务模式',
        parentId: 0,
        children: [
          {
            id: 11,
            creater: null,
            createTime: '2024-11-01T10:27:12.000+08:00',
            updater: null,
            updateTime: '2024-11-01T10:27:12.000+08:00',
            isDelete: 0,
            labelCode: '102001',
            labelName: '私有云',
            parentId: 3,
            children: null,
          },
          {
            id: 12,
            creater: null,
            createTime: '2024-11-01T10:27:12.000+08:00',
            updater: null,
            updateTime: '2024-11-01T10:27:12.000+08:00',
            isDelete: 0,
            labelCode: '102002',
            labelName: '公有云',
            parentId: 3,
            children: null,
          },
          {
            id: 13,
            creater: null,
            createTime: '2024-11-01T10:27:12.000+08:00',
            updater: null,
            updateTime: '2024-11-01T10:27:12.000+08:00',
            isDelete: 0,
            labelCode: '102003',
            labelName: '混合云',
            parentId: 3,
            children: null,
          },
        ],
      },
    ],
  }
})
