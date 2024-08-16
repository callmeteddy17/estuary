Các Component:
Post (Danh sách bài viết): Component chứa danh sách các bài viết.

State: posts (mảng chứa các bài viết).
Props: Không có.
Chức năng:
Create bài viết mới.
Hiển thị danh sách bài viết.
Post: Component đại diện cho từng bài viết.

Props:
post (dữ liệu bài viết),
onDelete (callback để xóa bài viết),
onEdit (callback để chỉnh sửa bài viết).
Chức năng:
Update bài viết.
Delete bài viết.
Hiển thị nút để quản lý các bình luận liên quan.
CommentList (Danh sách bình luận): Component hiển thị danh sách các bình luận của bài viết.

Props:
comments (danh sách bình luận của bài viết),
onAddComment (callback để thêm bình luận),
onDeleteComment (callback để xóa bình luận),
onEditComment (callback để chỉnh sửa bình luận).
Chức năng:
Hiển thị danh sách các bình luận.
Create bình luận mới.
Delete bình luận.
Update bình luận.
Comment: Component hiển thị và quản lý từng bình luận.

Props:
comment (dữ liệu bình luận),
onDelete (callback để xóa bình luận),
onEdit (callback để chỉnh sửa bình luận).

Quản lý State và Props:
Post sẽ quản lý state chính posts, chứa danh sách bài viết.
Mỗi Post sẽ nhận post từ Post qua props, và khi người dùng chỉnh sửa hoặc xóa bài viết, nó sẽ gọi các hàm onEdit hoặc onDelete từ Post.
Tương tự, CommentList sẽ nhận danh sách comments từ Post và quản lý các hành động thêm, xóa, chỉnh sửa bình luận.

Các thao tác CRUD:
Create:
Thêm bài viết: Người dùng có thể thêm bài viết từ Post, bài viết sẽ được thêm vào state posts.
Thêm bình luận: Trong CommentList, người dùng có thể thêm bình luận mới, bình luận sẽ được thêm vào mảng comments của bài viết đó.
Read:
Post hiển thị danh sách các bài viết.
CommentList hiển thị danh sách các bình luận của bài viết đó.
Update:
Chỉnh sửa bài viết hoặc bình luận sẽ cập nhật state tương ứng qua các hàm onEdit được truyền từ component cha.
Delete:
Xóa bài viết từ Post, hoặc xóa bình luận từ Comment thông qua các hàm onDelete.
