Strems Operation

1. Intermediate Operational Method:- Will perform the operation and will return a new stream as an output. 

1. filter() -> Returns a stream consisting of the elements of this stream that match the given predicate. 

Parameters: predicate - a non-interfering, stateless predicate to apply to each element to determine if it should be included.

Returns: the new stream

2. Map(). Returns a stream consisting of the results of applying the given function to the elements of this stream. 

Parameters: mapper - a non-interfering, stateless function to apply to each element.

Returns: the new stream

3. flatMap()-> Returns a stream consisting of the results of replacing each element of this stream with the contents of a mapped stream produced by applying the provided mapping function to each element. Each mapped stream is closed after its contents have been placed into this stream. (If a mapped stream is null an empty stream is used, instead.).

 API Note:
The flatMap() operation has the effect of applying a one-to-many transformation to the elements of the stream, and then flattening the resulting elements into a new stream.

4. Skip().

5. Limit():-Returns a stream consisting of the elements of this stream, truncated to be no longer than maxSize in length.

6. Distinct() 

2. Terminal Operational Method:- will perform the operation and will return the result not a new stream.
1. Count
2. Collect
3. forEach