window.SIDEBAR_ITEMS = {"enum":[["TINFLStatus","Return status codes."]],"fn":[["decompress_slice_iter_to_slice","Decompress one or more source slices from an iterator into the output slice."],["decompress_to_vec","Decompress the deflate-encoded data in `input` to a vector."],["decompress_to_vec_with_limit","Decompress the deflate-encoded data in `input` to a vector."],["decompress_to_vec_zlib","Decompress the deflate-encoded data (with a zlib wrapper) in `input` to a vector."],["decompress_to_vec_zlib_with_limit","Decompress the deflate-encoded data (with a zlib wrapper) in `input` to a vector. The vector is grown to at most `max_size` bytes; if the data does not fit in that size, the error [struct][DecompressError] will contain the status [`TINFLStatus::HasMoreOutput`] and the data that was decompressed on failure."]],"mod":[["core","Streaming decompression functionality."],["stream","Extra streaming decompression functionality."]],"struct":[["DecompressError","Struct return when decompress_to_vec functions fail."]]};