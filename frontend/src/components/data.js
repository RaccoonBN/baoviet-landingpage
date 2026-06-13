// src/components/data.js
import { ShieldCheck, Baby, Heart, Car, Flame, LineChart } from 'lucide-react';

export const productsData = [
  {
    id: 'bao-hiem-suc-khoe',
    title: 'Bảo hiểm Sức khỏe', // GIỮ NGUYÊN TÊN GỐC
    category: 'Sức khỏe',
    price: 'Chỉ từ 3k/ngày', // Hiển thị giá/ngày độc quyền cho gói Sức khỏe
    icon: ShieldCheck,
    iconColor: 'bg-emerald-500',
    bgImage: './assets/bhsk.png', // Sử dụng assets cục bộ theo cấu trúc thư mục của bạn
    features: [], // Làm sạch mảng bên ngoài để hiển thị card thoáng đãng, không bị rối chữ
    details: {
  description: 'Chương trình chăm sóc sức khỏe ưu việt bảo vệ bạn trước các rủi ro ốm đau, tai nạn. Giúp giảm thiểu tối đa gánh nặng viện phí phát sinh ngoài ý muốn.',
  hasTable: false,
 benefits: [
  'Chi trả nội trú: Thanh toán chi phí y tế thực tế phát sinh khi nằm viện điều trị do ốm đau, tai nạn',
  'Bảo lãnh viện phí: Hỗ trợ bảo lãnh thanh toán tại hệ thống các bệnh viện quốc tế trên toàn quốc',
  'Bồi thường nhanh chóng: Thủ tục giải quyết bồi thường trực tuyến tối giản, nhanh chóng qua ứng dụng di động',
  'Hỗ trợ toàn diện: Bao gồm chi phí phòng, giường, phẫu thuật, thuốc men, xét nghiệm và các chi phí y tế nội trú khác',
  'Quyền lợi linh hoạt: Tùy chọn mở rộng các chương trình Bảo hiểm ngoại trú, Nha khoa, Thai sản với hạn mức riêng biệt',
  'Không giới hạn: Bảo vệ toàn diện với giới hạn bảo hiểm tối đa lên đến 2 tỷ đồng/năm'
],
  times: [
    'Tai nạn rủi ro: Áp dụng ngay lập tức sau khi hợp đồng có hiệu lực.',
    'Bệnh thông thường: Thời gian chờ 30 ngày.',
    'Bệnh đặc biệt / Bệnh có sẵn: Thời gian chờ 365 ngày.',
    'Biến chứng thai sản: Thời gian chờ 90 ngày.'
  ]
}
  },
  {
    id: 'bao-hiem-thai-san',
    title: 'Bảo hiểm Thai sản', // GIỮ NGUYÊN TÊN GỐC
    category: 'Thai sản',
    price: null,
    icon: Baby,
    iconColor: 'bg-rose-500',
    bgImage: './assets/bhts.png',
    features: [],
    details: {
      description: 'Giải pháp tài chính hoàn hảo giúp các cặp vợ chồng trẻ an tâm chào đón thiên thần nhỏ mà không cần lo lắng về chi phí dịch vụ y tế đắt đỏ.',
    hasTable: false,

      benefits: [
  'Tiết kiệm tài chính: Hỗ trợ chi trả các khoản phí lớn cho sinh thường, sinh mổ và biến chứng thai sản',
  'Chăm sóc cao cấp: Tự do lựa chọn các bệnh viện quốc tế với cơ sở vật chất hiện đại, dịch vụ tận tâm',
  'An tâm tuyệt đối: Bảo vệ tài chính gia đình trước các rủi ro biến chứng thai sản không mong muốn',
  'Quyền lợi trọn gói: Chi trả cả tiền phòng, giường và chi phí chăm sóc hậu sản tại các cơ sở y tế',
  'Chủ động kế hoạch: Được hỗ trợ tài chính để mẹ và bé có sự khởi đầu thuận lợi và an toàn nhất',
  'Dịch vụ linh hoạt: Quyền lợi tùy chọn theo nhu cầu, giúp tối ưu hóa chi phí cho gia đình trẻ'
],
      times: [
        'Thời gian chờ sinh nở: Áp dụng thời gian chờ chuẩn 270 ngày hoặc 635 ngày tùy gói sản phẩm',
        'Biến chứng thai sản: Áp dụng mốc thời gian chờ 90 ngày kể từ ngày kích hoạt hợp đồng'
      ]
    }
  },
  {
    id: 'bao-hiem-nhan-tho',
    title: 'Bảo hiểm Nhân thọ', // GIỮ NGUYÊN TÊN GỐC
    category: 'Nhân thọ',
    price: null,
    icon: Heart,
    iconColor: 'bg-blue-600',
    bgImage: './assets/bhnt.png',
    features: [],
    details: {
      description: 'Sản phẩm liên kết chung ưu việt kết hợp hoàn hảo giữa bảo vệ dài hạn trước mọi biến cố rủi ro và đầu tư tăng trưởng tài sản an toàn bền vững.',
      hasTable: false,
    benefits: [
  'Bảo vệ toàn diện: Bảo vệ trước rủi ro tử vong hoặc thương tật toàn bộ vĩnh viễn, đảm bảo tài chính cho người thân',
  'Chi trả 115 bệnh lý nghiêm trọng: Hỗ trợ tài chính trước 115 bệnh lý nghiêm trọng, giúp khách hàng an tâm điều trị',
  'Tích lũy trọn vẹn: Nhận 100% Giá trị tài khoản hợp đồng khi đáo hạn, xây dựng nền tảng tài chính bền vững',
  'Thưởng duy trì: Nhận quyền lợi thưởng vào các ngày kỷ niệm hợp đồng thứ 05, 10, 15 và 20 để gia tăng giá trị tích lũy',
  'Thương tật bộ phận: Chi trả theo tỷ lệ phần trăm thương tật thực tế do tai nạn gây ra, bảo vệ thu nhập'
],
      times: [
        'Thời hạn hợp đồng: Linh hoạt lựa chọn các mốc thời gian 10 năm, 15 năm hoặc 20 năm cố định',
        'Thời gian đóng phí bắt buộc: Yêu cầu hoàn thành đầy đủ trong 4 năm đầu tiên của hợp đồng'
      ]
    }
  },
  {
    id: 'bao-hiem-vat-chat-oto',
    title: 'Bảo hiểm Ô tô', // GIỮ NGUYÊN TÊN GỐC
    category: 'Ô tô', // Sửa danh mục cho sát và thực tế hơn
    price: null,
    icon: Car,
    iconColor: 'bg-amber-600',
    bgImage: './assets/bhoto.png',
    features: [],
    details: {
      description: 'Tấm khiên bảo vệ vững chắc cho chiếc xe yêu quý của bạn trước mọi va chạm, thiên tai rủi ro bất ngờ khi lưu thông trên đường.',
      hasTable: false,
    benefits: [
  'Bồi thường toàn diện: Bảo vệ trước các tổn thất do đâm va, lật đổ, chìm xe, cháy nổ hoặc thiên tai',
  'Gara chính hãng: Quyền lợi tùy chọn sửa chữa tại hệ thống gara chính hãng trên toàn quốc',
  'Cứu hộ 24/7: Hỗ trợ bảo hiểm thủy kích, ngập nước và dịch vụ cứu hộ, kéo xe miễn phí 24/7',
  'Mất cắp bộ phận: Hỗ trợ bồi thường chi phí thay thế mất cắp bộ phận lên đến 2 lần mỗi năm',
  'Sửa chữa vật chất: Khắc phục, sơn sửa toàn bộ hư hại do tai nạn đâm va ngoài ý muốn',
  'Thay mới phụ tùng: Cam kết thay thế phụ tùng mới chính hãng, không tính khấu hao hao mòn xe cũ'
],
      times: [
        'Hiệu lực bảo hiểm: Kích hoạt ngay lập tức sau khi hoàn tất thủ tục giám định ảnh xe và đóng phí',
        'Thời hạn hợp đồng: Thời gian bảo vệ tiêu chuẩn là 01 năm (tái tục định kỳ hàng năm)'
      ]
    }
  },
  {
    id: 'bao-hiem-chay-no',
    title: 'Bảo hiểm Cháy nổ', // GIỮ NGUYÊN TÊN GỐC
    category: 'Cháy nổ', // Sửa danh mục cho trực diện loại hình bảo hiểm
    price: null,
    icon: Flame,
    iconColor: 'bg-red-500',
    bgImage: './assets/bhcn.png',
    features: [],
    details: {
   description: 'Giải pháp bảo vệ tài sản trước những rủi ro cháy, nổ bất ngờ, giúp giảm thiểu tổn thất tài chính và nhanh chóng khôi phục hoạt động sau sự cố.',

benefits: [
  'Bảo vệ tài sản: Bồi thường thiệt hại vật chất đối với nhà cửa, công trình và tài sản gắn liền với công trình',
  'Bảo vệ thiết bị: Bảo hiểm cho máy móc, thiết bị, hàng hóa, vật tư và các tài sản được kê khai trong hợp đồng',
  'Rủi ro cháy nổ: Chi trả tổn thất phát sinh từ các rủi ro cháy, sét đánh trực tiếp và nổ thuộc phạm vi bảo hiểm',
  'Hỗ trợ khắc phục: Hỗ trợ tài chính kịp thời sau sự cố, giúp khách hàng nhanh chóng ổn định hoạt động và sinh hoạt',
  'Bồi thường minh bạch: Giá trị bồi thường được xác định rõ ràng dựa trên mức độ thiệt hại thực tế và số tiền bảo hiểm',
  'Thủ tục nhanh gọn: Quy trình giám định và giải quyết bồi thường rõ ràng, tuân thủ nghiêm ngặt các quy định hiện hành'
],

times: [
  'Thời hạn bảo hiểm: 01 năm hoặc theo thỏa thuận ghi trên Giấy chứng nhận bảo hiểm',
  'Hiệu lực bảo hiểm bắt đầu từ thời điểm ghi trên hợp đồng sau khi hoàn tất thanh toán phí bảo hiểm'

      ]
    }
  },
  {
    id: 'bao-hiem-dau-tu',
    title: 'Đầu tư & Tích lũy', 
    category: 'Đầu tư',
    price: null,
    icon: LineChart,
    iconColor: 'bg-purple-600',
    bgImage: './assets/bhdt.png',
    features: [],
    details: {
      description: 'Kế hoạch tài chính thông minh giúp dòng tiền của bạn tăng trưởng an toàn, ổn định mà không chịu ảnh hưởng bởi các biến động tiêu cực của thị trường tài chính.',
      hasTable: false,
      
     benefits: [
  'Lãi suất hấp dẫn: Hưởng lãi suất đầu tư thực tế cạnh tranh từ Quỹ liên kết chung giúp gia tăng tài sản hiệu quả',
  'Cam kết tối thiểu: Đảm bảo lãi suất sàn an toàn, vững chắc cho khách hàng kể cả khi thị trường tài chính biến động',
  'Miễn phí rút tiền: Quyền lợi rút tiền mặt để chi tiêu khẩn cấp hoàn toàn miễn phí, chủ động quản lý tài chính',
  'Nhận trọn giá trị: Nhận 100% giá trị tích lũy lớn khi đáo hạn hợp đồng, tạo nguồn vốn vững chắc cho tương lai',
  'Lãi suất đảm bảo: Cam kết không thấp hơn mức sàn quy định tối thiểu của Bộ Tài Chính, đảm bảo tính an toàn cao',
  'Linh hoạt tài chính: Cho phép đóng thêm phí tích lũy hoặc tạm ứng từ giá trị hoàn lại bất cứ lúc nào khi cần thiết'
],
      times: [
        'Thời hạn bảo hiểm: Kéo dài linh hoạt từ 10 năm đến trọn đời tùy theo nhu cầu của khách hàng.',
        'Rút tiền tài khoản: Khách hàng được quyền thao tác rút tiền sau năm hợp đồng thứ nhất.'
      ]
    }
  }
];