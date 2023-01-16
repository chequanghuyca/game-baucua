# TÔM CUA CÁ REACT JS (REACT FUNCTION COMPONENT - RFC)
Luyện sử dụng các hook lấy và đẩy data từ redux trong reactJS và xử lý nghiệp vụ trong store

## Xử lý nghiệp vụ
- Xác định thành phần thay đổi để tạo Store redux. Tạo store tổng gồm 3 mảng bao gồm:
    + Mảng danh sách cược: 6 con vật đặt cược có phần từ là: (mã , hình ảnh , điểm đặt dược)
    + Phần tử: Tổng điểm
    + Mảng xúc xắc : Khi ấn Xóc đĩa

- Xử lý action đặt cược trên redux:
    1. Tìm index khi click đặt cược (Copy tạo mảng mới đặt tên: danhsachDatCuocUpdate từ store state danhSachCuoc )

    2. Duyệt mảng danhsachDatCuocUpdate findIndex trả về quân cược mã trùng với mã quân cược mà action gửi lên thì thực hiện sét lại tổng thưởng và điểm cược trong store

    3. Lắc xúc xắc: Lấy phần tử trong mảng danh sách cược đẩy vào mảng xúc xắc
    + Chạy vòng lặp 3 lần kết hợp thuật toán random trả về mảng mới có 3 phần tử. => Push mảng mới vào mangXucXac để render màn hình

    4. Xử lý điểm thưởng
